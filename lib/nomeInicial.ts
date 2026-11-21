export function nomeInicial(nome: string): string {
    return nome.trim().split(/\s+/)[0];
}