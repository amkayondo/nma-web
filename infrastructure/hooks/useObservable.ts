import {useEffect, useState } from 'react'
import { BehaviorSubject } from 'rxjs'

export function useObservable<TState>(stateSubject: BehaviorSubject<TState>) {
    const [state, setState] = useState(stateSubject.getValue());
  
    useEffect(() => {
      const subscription = stateSubject.subscribe((currentState) => {
        setState(currentState);
      });
  
      return () => subscription.unsubscribe();
    }, []);
  
    return state;
  }
  