import express from "express";
import { Participation } from "../models/participationModel.js";

const router = express.Router();

router.post("/", async (request, response) => {
  try {
    if (!request.body.eventId || !request.body.participantEmail) {
      return response.send("Insufficient fields. Send all fields");
    }
    const newParticipation = {
      eventId: request.body.eventId,
      participantEmail: request.body.participantEmail,
    };
    const participation = await Participation.create(newParticipation);
    return response.send(participation);
  } catch (error) {
    console.log(error.message);
    return response.send(error.message);
  }
});

router.get("/", async (request, response) => {
  try {
    const participations = await Participation.find({});
    return response.send(participations);
  } catch (error) {
    console.log(error.message);
    return response.send(error.message);
  }
});

router.get("/eventId/:eventId", async (request, response) => {
  try {
    const { eventId } = request.params;
    const participation = await Participation.find({ eventId: eventId });
    return response.send(participation);
  } catch (error) {
    console.log(error.message);
    return response.send(error.message);
  }
});

router.get("/participantEmail/:participantEmail", async (request, response) => {
  try {
    const { participantEmail } = request.params;
    const participation = await Participation.find({
      participantEmail: participantEmail,
    });
    return response.send(participation);
  } catch (error) {
    console.log(error.message);
    return response.send(error.message);
  }
});

router.get("/:eventId/:participantEmail", async (request, response) => {
  try {
    const { eventId, participantEmail } = request.params;
    const participation = await Participation.findOne({
      eventId: eventId,
      participantEmail: participantEmail,
    });
    return response.send(participation);
  } catch (error) {
    console.log(error.message);
    return response.send(error.message);
  }
});

export default router;
