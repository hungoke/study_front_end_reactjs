const shallowMenuNode = [
  {
    icon: 'fa fa-tachometer',
    title: 'Dashboard',
    link: '/dashboard',
    children: [
      {
        title: 'Tool',
        link: '/dashboard/tool'
      },
      {
        title: 'Reports',
        link: '/dashboard/reports'
      },
      {
        title: 'Analytics',
        link: '/dashboard/analytics'
      },
      {
        title: 'Code Blocks',
        link: '/dashboard/code-blocks'
      },
    ]
  },
  {
    icon: 'fa fa-truck',
    title: 'Sales',
    link: '/sales',
    children: [
      {
        title: 'New Sales',
        link: '/sales/new-sales'
      },
      {
        title: 'Expired Sales',
        link: '/sales/expired-sales'
      },
      {
        title: 'Sales Reports',
        link: '/sales/sales-reports'
      },
      {
        title: 'Deliveries',
        link: '/sales/deliveries'
      },
    ]
  },
  {
    icon: 'fa fa-envelope',
    title: 'Messages',
    link: '/messages',
    children: [
      {
        title: 'Inbox',
        link: '/messages/inbox'
      },
      {
        title: 'Outbox',
        link: '/messages/outbox'
      },
      {
        title: 'Sent',
        link: '/messages/sent'
      },
      {
        title: 'Archived',
        link: '/messages/archived'
      },
    ]
  },
  {
    icon: 'fa fa-users',
    title: 'Users',
    link: '/users',
    children: [
      {
        title: 'New User',
        link: '/users/new-user'
      },
      {
        title: 'User Groups',
        link: '/users/user-groups'
      },
      {
        title: 'Permissions',
        link: '/users/permissions'
      },
      {
        title: 'Passwords',
        link: '/users/passwords'
      },
    ]
  },
  {
    icon: 'fa fa-cogs',
    title: 'Settings',
    link: '/settings',
    children: [
      {
        title: 'Databases',
        link: '/settings/databases'
      },
      {
        title: 'Design',
        link: '/settings/design'
      },
      {
        title: 'Change User',
        link: '/settings/change-user'
      },
      {
        title: 'Log Out',
        link: '/settings/log-out'
      },
    ]
  },
]

const renderShallowMenuByNode = array => {
  const menu = document.getElementById('shallow-menu-node')

  const ulParent = document.createElement('ul')
  array.forEach(item => {
    const li = document.createElement('li')
    const icon = document.createElement('i')
    icon.setAttribute('class', item.icon)
    const a = document.createElement('a')
    a.setAttribute('href', item.link)
    a.innerText =item.title

    const arrow = document.createElement('i')
    arrow.setAttribute('class', 'fa fa-angle-right')
    arrow.addEventListener('click', () => {
      toggleMenu(arrow)
      toggleArrow(arrow)
    })
    li.appendChild(icon)
    li.appendChild(a)
    li.appendChild(arrow)

    if (Array.isArray(item.children)) {
      const ulChild = document.createElement('ul')
      item.children.forEach(child => {
        const liChild = document.createElement('li')
        const aChild = document.createElement('a')
        aChild.setAttribute('href', child.link)
        aChild.innerText = child.title

        ulChild.appendChild(liChild)
        liChild.appendChild(aChild)
      })

      li.appendChild(ulChild)
    }

    ulParent.appendChild(li)
  })

  menu.appendChild(ulParent)
}

renderShallowMenuByNode(shallowMenuNode)

const toggleMenu = arrow => {
  const li = arrow.parentNode
  const ul = li.querySelector('ul')

  if (ul) {
    const isDisplay = ul.style.display === 'block'
    if (isDisplay) {
      ul.style.display = 'none'
    } else {
      ul.style.display = 'block'
    }
  }
}

const toggleArrow = arrow => {
  const isArrow = arrow.getAttribute('class') === 'fa fa-angle-right'
  if (isArrow) {
    arrow.setAttribute('class', 'fa fa-angle-down')
    arrow.style.color = '#14a2f8'
  } else {
    arrow.setAttribute('class', 'fa fa-angle-right')
    arrow.style.color = 'white'
  }
}
