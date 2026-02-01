import Company from "../models/Company.model.js";

export const getCompanies = async (req, res) => {
  const { city, sort } = req.query;

  let filter = {};
  if (city) {
    filter.city = { $regex: city, $options: "i" };
  }

  let sortOption = {};
  if (sort) {
    sortOption[sort] = 1;
  }

  const companies = await Company.find(filter).sort(sortOption);
  res.json(companies);
};


export const getCompanyById = async (req, res) => {
  const company = await Company.findById(req.params.id);
  if (!company) return res.status(404).json({ message: "Company not found" });
  res.json(company);
};

export const createCompany = async (req, res) => {
  const company = await Company.create(req.body);
  res.status(201).json(company);
};
