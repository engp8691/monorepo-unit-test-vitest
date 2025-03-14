import { render, screen, waitFor } from '@testing-library/react';
import { vi } from "vitest";

import App from './app';

beforeEach(() => {
  vi.restoreAllMocks();
});

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          title: "Storybook Mock Title",
          body: "This is the Storybook mock body by yonglin.",
         }),
      })
    ) as jest.Mock;

    const { getAllByText } = render(<App />);

    await waitFor(() => {
      expect(
        getAllByText(new RegExp('Storybook Mock Title', 'gi')).length > 0
      ).toBeTruthy();
      expect(screen.getByText(/This is the Storybook mock body by yonglin./i)).toBeInTheDocument();
    });
  });
});
