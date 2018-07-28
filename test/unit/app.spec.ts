import {App} from '../../src/app';

const ServiceWorkerSetupMock = { register: jest.fn() };

describe('App Component', () => {
  it('title is correct', () => {
    expect(new App(ServiceWorkerSetupMock).title).toBe('Aurelia HN PWA');
  });
});
