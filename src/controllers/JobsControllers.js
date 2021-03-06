import Job from "../models/Job";

export default class Jobs {
  constructor() {}

  async all() {
    try {
      const jobs = await Job.find();
      return jobs;
    } catch (error) {
      return [];
    }
  }

  async create(input) {
    try {
      const job = await Job.create(input);
      return job;
    } catch (error) {
      return null;
    }
  }

  async findById({ _id }) {
    try {
      const job = await Job.findById(_id);
      return job;
    } catch (error) {
      return null;
    }
  }
}
