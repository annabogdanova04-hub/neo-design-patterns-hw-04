// TODO: реалізуйте клас або інтерфейс тут
export class DocumentBuilder {
  private header: string = "";
  private body: string = "";
  private footer: string = "";

  addHeader(header: string): this {
    this.header = header;
    return this;
  }

  addBody(body: string): this {
    this.body = body;
    return this;
  }

  addFooter(footer: string): this {
    this.footer = footer;
    return this;
  }

  build(): string {
    return `=== ${this.header} ===\n\n${this.body}\n\n${this.footer}`;
  }
}