const Joi = require('joi');

const id = Joi.number().integer();
const firtName = Joi.string().min(3).max(30);
const lastName = Joi.string().min(3).max(30);
const phone = Joi.string().min(3).max(30);
const email = Joi.string().email();
const DocumentTypeId = Joi.number().integer();
const LocalityId = Joi.number().integer();

const createStudentSchema = Joi.object({
    id: id.required(),
    firstName: firtName.required(),
    lastName: lastName.required(),
    phone: phone,
    email: email.required(),
    DocumentTypeId: DocumentTypeId.required(),
    LocalityId: LocalityId.required()
});

const getStudentSchema = Joi.object({
    id: id,
})

module.exports = { createStudentSchema, getStudentSchema };