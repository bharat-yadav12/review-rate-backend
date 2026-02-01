import Review from "../models/Review.model.js";
import Company from "../models/Company.model.js";

export const addReview = async (req, res) => {
  const { rating, comment, companyId } = req.body;

  const review = await Review.create({
    rating,
    comment,
    company: companyId
  });

  const company = await Company.findById(companyId);
  company.reviewCount += 1;
  company.rating =
    (company.rating * (company.reviewCount - 1) + rating) /
    company.reviewCount;

  await company.save();

  res.status(201).json(review);
};

export const getReviewsByCompany = async (req, res) => {
  const reviews = await Review.find({ company: req.params.companyId });
  res.json(reviews);
};
