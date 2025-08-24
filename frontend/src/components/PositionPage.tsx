import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useInterviewFlow, useCandidates } from '../services/usePositionData';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import axios from 'axios';

const PositionPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: phases, isLoading: loadingPhases } = useInterviewFlow(id!);
  const { data: candidates, isLoading: loadingCandidates, refetch } = useCandidates(id!);

  const onDragEnd = async (result: any) => {
    const { source, destination, draggableId } = result;

    if (!destination || source.droppableId === destination.droppableId) {
      return;
    }

    const candidateId = draggableId;
    const newPhaseId = destination.droppableId;

    try {
      // Optimistic UI update
      const updatedCandidates = candidates?.map((candidate) =>
        candidate.id === candidateId
          ? { ...candidate, currentPhaseId: newPhaseId }
          : candidate
      );

      // Re-render with optimistic data
      refetch({ queryKey: ['candidates', id], queryFn: () => updatedCandidates });

      // Call API to persist the change
      await axios.put(`/candidates/${candidateId}/stage`, { stageId: newPhaseId });
    } catch (error) {
      alert('Error al mover el candidato.');
      refetch(); // Revert changes on error
    }
  };

  if (loadingPhases || loadingCandidates) {
    return <div>Cargando...</div>;
  }

  return (
    <Container fluid>
      <Row className="align-items-center mb-4">
        <Col xs="auto">
          <Button variant="link" onClick={() => navigate(-1)}>&larr; Volver</Button>
        </Col>
        <Col>
          <h1 className="h3">Posición: {id}</h1>
        </Col>
      </Row>
      <DragDropContext onDragEnd={onDragEnd}>
        <Row className="flex-wrap">
          {phases?.map((phase) => (
            <Col key={phase.id} xs={12} md={6} lg={4} className="mb-3">
              <Droppable droppableId={phase.id}>
                {(provided) => (
                  <div
                    className="p-3 border bg-light h-100"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    <h5>{phase.name}</h5>
                    {candidates
                      ?.filter((candidate) => candidate.currentPhaseId === phase.id)
                      .map((candidate, index) => (
                        <Draggable key={candidate.id} draggableId={candidate.id} index={index}>
                          {(provided) => (
                            <div
                              className="p-2 mb-2 bg-white border"
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <strong>{candidate.fullName}</strong>
                              <div>Puntuación: {candidate.averageScore}</div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </Col>
          ))}
        </Row>
      </DragDropContext>
    </Container>
  );
};

export default PositionPage;
