import {Component, Input, Signal} from '@angular/core';

@Component({
  selector: 'ashz-card-stats',
  imports: [],
  templateUrl: './card-stats.html',
  styleUrl: './card-stats.scss',
})
export class CardStats {
  private importantName!:string;
  private notImportantName!: string;
  private value!: string;

  public get ImportantName():string{
    return this.importantName;
  }
  @Input({required:true})
  public set ImportantName(value:string) {
    this.importantName = value;
  }

  public get NotImportantName():string{
    return this.notImportantName;
  }

  @Input({required:true})
  public set NotImportantName(value:string){
    this.notImportantName = value;
  }

  public get Value():string{
    return this.value;
  }

  @Input({required:true})
  public set Value(value:string){
    this.value = value;
  }
}
