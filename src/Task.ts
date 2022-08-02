
/**
   * Simple data class that allows for generalization of a task from any TFS
   * @public
   */
export class Task { 
  public id: string;
  public state: string;
  public title: string;
  public type: string;
  public link: string;

  constructor(id: string, state: string, title: string, type: string, link: string) {
    this.id = id;
    this.state = state;
    this.title = title;
    this.type = type;
    this.link = link;
  }
}