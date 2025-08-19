import { Contact } from "../models/api/contacts.js";
import httpError from "../helpers/httpError.js";

export const add = async (req, res) => {
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

export const getAll = async (req, res, next) => {
  const result = await Contact.find();
  res.status(200).json(result);
};

export const getById = async (req, res, next) => {
  const { id } = req.params;
  const result = await Contact.findById(id);

  if (!result) {
    throw httpError(404, "Not found");
  }
};

export const removeById = async (req, res, next) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndDelete(id);

  if (!result) {
    throw httpError(404, "Not found");
  }

  res.json({
    message: "Contact deleted",
  });
};

export const updateById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!result) {
    throw httpError(404, "Not found");
  }
  res.json(result);
};

export const updateStatusContact = async (req, res) => {
  const { id } = req.params;
  const { favorite } = req.body;
  const result = await Contact.findByIdAndUpdate(
    id,
    { favorite },
    { new: true }
  );

  if (!result) {
    throw httpError(404, "Not found");
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      result: result,
    },
  });
};

// export const add = async (req, res, next) => {
//   const result = await contacts.addContact(req.body);

//   res.status(201).json(result);
// };

// export const getAll = async (req, res, next) => {
//   const result = await contacts.listContacts();

//   res.json(result);
// };

// export const getById = async (req, res, next) => {
//   const { id } = req.params;
//   const result = await contacts.getContactById(id);

//   if (!result) {
//     throw httpError(404, "Not found");
//   }

//   res.json(result);
// };

// export const removeById = async (req, res, next) => {
//   const { id } = req.params;
//   const result = await contacts.removeContact(id);

//   if (!result) {
//     throw httpError(404, "Not found");
//   }

//   res.json({
//     message: "Contact deleted",
//   });
// };

// export const updateById = async (req, res, next) => {
//   const { id } = req.params;
//   const result = await contacts.updateContact(id, req.body);

//   if (!result) {
//     throw httpError(404, "Not found");
//   }

//   res.json(result);
// };
