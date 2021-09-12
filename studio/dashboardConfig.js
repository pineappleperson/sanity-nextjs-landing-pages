export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '613e795b51f3c52af163357e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-aeynf32u',
                  apiId: 'c4aaeefd-b951-4f82-ac63-021d78980e04'
                },
                {
                  buildHookId: '613e795b973b72fa911b595b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-yc5q2z56',
                  apiId: '72b03194-9f3e-4691-87bc-019cfbe36861'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pineappleperson/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-yc5q2z56.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
