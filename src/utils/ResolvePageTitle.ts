export function ResolvePageTitle(path: string): string {
  switch (path) {
    case '/':
      return 'Home';

    case '/Sobre':
      return 'Sobre';

    default:
      return '';
  }
}
