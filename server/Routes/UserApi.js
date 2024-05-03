import user from "../models/usersModels.js"
import express from "express"

const route = express();

route.post('/create', async (req, res) => {
    const { website, username, password } = req.body;
    const existPass = await user.findOne({ password })
    try {
        if (existPass) {
            return res.status(409).json({ msg: 'This password is already decleard' });
        }
        const savedData = await user.create(req.body);
        if (savedData) {
        console.log('user has been created successfully');
            return res.status(201).json({ msg: 'user created successfully', data: savedData });
        };
        res.status(500).json('user add nahi huaa');
    } catch (error) {
        console.log(error)
        res.status(500).json('koi problem hai create krne me');
    }
})

route.delete('/delete_one/:id', async (req, res) => {
    const existUser = await user.findById(req.params.id);
    try {
        if (existUser) {
            const deletedData = await user.findByIdAndDelete(req.params.id);
            console.log('user has been deleted');
            return res.status(202).json({ msg: 'user has been deleted', data: deletedData });
        }
        res.status(404).json('not able to delete');
        console.log('delete nahi huaa')
    } catch (error) {
        console.log(error);
        res.status(505).json('koi problem hai delete krne me');
    }
})

route.get('/get-all', async (req, res) => {
    const allUserData = await user.find();
    try {
        if (allUserData) {
            console.log('pura data mil gya');
            return res.status(202).json(allUserData)
        }
        res.status(404).json('all user has not been found')
        console.log('sbhi user nahi mile');
    } catch (error) {
        res.status.apply(505).json(error);
        console.log(error);
    }
})

route.get('/get-one/:id', async (req, res) => {
    const findUser = await user.findById(req.params.id);
    try {
        if (findUser) {
            console.log('ek user mil gya');
            return res.status(202).json(findUser);
        }
        console.log('ek user nahi mila')
        return res.status(404).json('amuser not find');
    } catch (error) {
        console.log('ek user milne me problem aa rhi hai');
        res.status(505).json(error);
    }
})

route.put('/update/:id', async (req, res) => {
    const id = req.params.id;
    const updateData = req.body;
    try {
        const updatedUser = await user.findByIdAndUpdate(id, updateData, { new: true });
        res.status(200).json({ msg: 'user has been updated', data: updateData });
        console.log('user update ho gya');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default route;
