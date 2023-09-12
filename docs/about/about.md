---
layout: doc
comment: false
prev: false
next: false
sidebar: false
---
<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/84845528?v=4',
    name: 'Yougraj',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yougraj' },
      { icon: 'twitter', link: 'https://twitter.com/yougrajb' },
      { icon: 'instagram', link: 'https://instagram.com/__sumon_bora__'}
    ]
  },
]
</script>
<VPTeamMembers size="small" :members="members" />
