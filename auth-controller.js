const express = require('express');


const login = async (req, res) => {
    res.status(200).json({message: 'Authenticated successfully'});
};

const register = async (req, res) => {
    res.status(200).json({message: 'Registered'});
};
const logout = async (req, res) => {
    res.status(200).json({message: 'Logout page'});
}

module.exports = {login, register, logout};