  export enum OrderStage {
    Landing,
    Ingrediants,
    Checkout
  }

  export interface IStageEvents{
    goToNext?: ()=> void;
    goToPrev?: ()=> void;
}