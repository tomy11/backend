const { signin } = require('../../controller/AuthController');
const UserModel = require('../../models/UserModel');
jest.mock('../../models/UserModel')

const request = {
    body: {
        email: 'boom@gmail.com',
        password: 'P@ssw0rd11',
    },
};

const response = {
    status: jest.fn((x) => x),
    send: jest.fn((x) => x),
};

// it('เช็ค register controller', async () => {

//     UserModel.fondOne.mockImplementationOnce(() => ({
//         firstName: "boom",
//         lastName: "baam",
//         email: "boom@gmail.com",
//         password: "P@ssw0rd11"
//     }))
//     await signin(request, response);
//     expect(response.status).toHaveBeenCalledWith(200);
// })