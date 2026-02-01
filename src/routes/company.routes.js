import express from "express";
import {
  getCompanies,
  getCompanyById,
  createCompany
} from "../controllers/company.controller.js";

const router = express.Router();

router.get("/", getCompanies);
router.get("/:id", getCompanyById);
router.post("/", createCompany);

export default router;
