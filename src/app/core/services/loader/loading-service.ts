import {computed, Injectable, Signal, signal, WritableSignal} from '@angular/core';

/**
 * Service to check if a loading is running or not : if multiple loading asked, the loading will be active until all loading are finished.
 */
@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private counterLoader: WritableSignal<number> = signal(0);

  /**
   * Extract the status if the loader is active or not
   */
  public get IsLoading(): Signal<boolean>{
    return computed(() => this.counterLoader() > 0);
  }

  /**
   * Start the loading of an element
   */
  public startLoading(): void {
    this.counterLoader.update(value => value + 1);
  }

  /**
   * Stop the loading of an element
   */
  public stopLoading(): void {
    this.counterLoader.update(value => value - 1);
  }
}
