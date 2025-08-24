import { useQuery } from 'react-query';
import axios from 'axios';

// Tipos TypeScript
export interface Phase {
  id: string;
  name: string;
  order: number;
}

export interface Candidate {
  id: string;
  fullName: string;
  averageScore: number;
  currentPhaseId: string;
}

// Hook para obtener las fases del proceso
export const useInterviewFlow = (positionId: string) => {
  return useQuery<Phase[]>(['interviewFlow', positionId], async () => {
    const response = await axios.get(`/positions/${positionId}/interviewFlow`);
    return response.data;
  });
};

// Hook para obtener los candidatos
export const useCandidates = (positionId: string) => {
  return useQuery<Candidate[]>(['candidates', positionId], async () => {
    const response = await axios.get(`/positions/${positionId}/candidates`);
    return response.data;
  });
};
