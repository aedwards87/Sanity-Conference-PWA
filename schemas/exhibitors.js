import icon from 'react-icons/lib/md/local-attraction'

export default {
  name: 'exhibitors',
  title: 'Exhibitors',
  type: 'document',
  icon,
  fields: [
    {
      name: 'sponsorName',
      title: 'Sponsor Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100
      }
    },
    {
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
  ],
  preview: {
    select: {title: 'name',  media: 'photo'}
  }
}
