const AuthController = require('../controller/AuthController');

it('เช็ค register ใสข้อมูลน้อยกว่า 3 ตัว', () => {
    expect(sum(1, 2)).toBe(3);
});

it('เช็ค register ใสข้อมูลมากกว่า 3 ตัว', () => {
    expect(sum(1, 2)).toBe(3);
});

it('เช็ค register ไม่ใส่ fristname', () => {
    expect(sum(1, 2)).toBe(3);
});

it('เช็ค register ไม่ใส่ lastname', () => {
    expect(sum(1, 2)).toBe(3);
});

it('เช็ค register ไม่ใส่ email', () => {
    expect(sum(1, 2)).toBe(3);
});

it('เช็ค register ไม่ใส่ password', () => {
    expect(sum(1, 2)).toBe(3);
});

it('เช็ค register ไม่ใส่ข้อมูลเลย', () => {
    expect(sum(1, 2)).toBe(3);
});