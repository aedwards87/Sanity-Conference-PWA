import icon from 'react-icons/lib/md/art-track'

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
      name: 'sponsorLevel',
      title: 'Sponsor Level',
      type: 'string',
      // of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Headline', value: 'headline'},
          {title: 'Gold', value: 'gold'},
          {title: 'Silver', value: 'silver'},
        ],
        layout: 'radio',
        direction: 'vertical',
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'stand',
      title: 'Stand',
      type: 'number'
    },
  ],
  preview: {
    select: {title: 'sponsorName',  media: 'photo', subtitle: 'sponsorLevel'}
  }
}
