const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

describe('Tasks (e2e)', () => {
  let mock;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });

  it('should create a task', async () => {
    const taskData = { title: 'Test Task', description: 'This is a test task' };
    const responseData = { id: 1, ...taskData }; // Assuming the server returns an ID

    mock.onPost('/tasks').reply(201, responseData);

    const response = await axios.post('/tasks', taskData);

    expect(response.status).toBe(201);
    expect(response.data).toEqual(responseData);
  });

  it('should get all tasks', async () => {
    const responseData = [{ id: 1, title: 'Task 1' }, { id: 2, title: 'Task 2' }];

    mock.onGet('/tasks').reply(200, responseData);

    const response = await axios.get('/tasks');

    expect(response.status).toBe(200);
    expect(response.data).toEqual(responseData);
  });

  it('should update a task', async () => {
    const taskId = 1;
    const newTitle = 'Updated Task';
    const responseData = { id: taskId, title: newTitle };

    mock.onPatch(`/tasks/${taskId}`).reply(200, responseData);

    const response = await axios.patch(`/tasks/${taskId}`, { title: newTitle });

    expect(response.status).toBe(200);
    expect(response.data).toEqual(responseData);
  });

  it('should delete a task', async () => {
    const taskId = 1;

    mock.onDelete(`/tasks/${taskId}`).reply(200);

    const response = await axios.delete(`/tasks/${taskId}`);

    expect(response.status).toBe(200);
  });
});
