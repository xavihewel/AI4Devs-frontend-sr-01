import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import PositionPage from './PositionPage';
import { Phase, Candidate } from '../services/usePositionData';

const queryClient = new QueryClient();

// Ajustar los tipos manualmente
interface MockRequest {
  body: any;
  params: Record<string, string>;
}

interface MockResponse {
  status: (code: number) => MockResponse;
  json: (data: any) => void;
}

// Mock server
const server = setupServer(
  rest.get('/positions/:id/interviewFlow', (req: MockRequest, res: MockResponse, ctx: any) => {
    return res.json([
      { id: 'phase-1', name: 'Entrevista Inicial', order: 1 },
      { id: 'phase-2', name: 'Entrevista Técnica', order: 2 },
    ]);
  }),
  rest.get('/positions/:id/candidates', (req: MockRequest, res: MockResponse, ctx: any) => {
    return res.json([
      { id: 'candidate-1', fullName: 'Juan Pérez', averageScore: 85, currentPhaseId: 'phase-1' },
      { id: 'candidate-2', fullName: 'Ana Gómez', averageScore: 90, currentPhaseId: 'phase-2' },
    ]);
  }),
  rest.put('/candidates/:id/stage', (req: MockRequest, res: MockResponse, ctx: any) => {
    return res.status(200);
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('PositionPage', () => {
  it('renders the Kanban board with phases and candidates', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["/positions/1"]}>
          <PositionPage />
        </MemoryRouter>
      </QueryClientProvider>
    );

    expect(await screen.findByText('Entrevista Inicial')).toBeInTheDocument();
    expect(await screen.findByText('Juan Pérez')).toBeInTheDocument();
    expect(await screen.findByText('Ana Gómez')).toBeInTheDocument();
  });

  it('allows dragging and dropping candidates between phases', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["/positions/1"]}>
          <PositionPage />
        </MemoryRouter>
      </QueryClientProvider>
    );

    const candidate = await screen.findByText('Juan Pérez');
    const targetPhase = await screen.findByText('Entrevista Técnica');

    fireEvent.dragStart(candidate);
    fireEvent.dragEnter(targetPhase);
    fireEvent.drop(targetPhase);

    expect(await screen.findByText('Juan Pérez')).toBeInTheDocument();
  });
});
