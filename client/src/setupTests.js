// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { server } from "./utils/mocks/server";

beforeAll(async () => server.listen());
afterEach(async() => server.resetHandlers());
afterAll(async () => server.close());
