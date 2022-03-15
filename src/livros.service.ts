import { Injectable } from '@nestjs/common';
import { Livro } from './livro.model';

@Injectable()
export class LivrosService {
  private readonly livros: Livro[] = [
    new Livro('LIV01', 'Livro1', 29.9),
    new Livro('LIV02', 'Livro2', 39.9),
    new Livro('LIV03', 'Livro3', 49.9),
  ];

  obterTodos(): Livro[] {
    return this.livros;
  }

  obterUm(id: number): Livro {
    return this.livros[0];
  }

  criar(livro: Livro) {
    this.livros.push(livro);
  }

  alterar(livro: Livro): Livro {
    return livro;
  }

  apagar(id: number) {
    this.livros.pop();
  }
}
