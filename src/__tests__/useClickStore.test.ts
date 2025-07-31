import { act } from 'react-dom/test-utils';
import { useClickStore } from '../store/useClickStore';

describe('useClickStore', () => {
  beforeEach(() => {
    useClickStore.setState({ clickCount: 0 });
  });

  it('should initialize with clickCount 0', () => {
    expect(useClickStore.getState().clickCount).toBe(0);
  });

  it('should increment clickCount', () => {
    act(() => {
      useClickStore.getState().increment();
    });
    expect(useClickStore.getState().clickCount).toBe(1);
  });
});
