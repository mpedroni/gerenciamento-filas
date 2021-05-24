export interface MenuItem {
  icon: string
  title: string
  to: string
}

const menu: MenuItem[] = [
  {
    icon: 'mdi-account:mdi-account-outline',
    title: 'Pessoa',
    to: '/pessoa',
  },
  {
    icon: 'mdi-bank:mdi-bank-outline',
    title: 'Unidade de Ensino',
    to: '/unidade-ensino',
  },
]

export { menu }
