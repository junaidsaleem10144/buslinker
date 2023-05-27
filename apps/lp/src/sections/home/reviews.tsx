import { Card, CardContent, SectionAndOffset, Text } from 'components'
import React from 'react'
import tw from 'tailwind-styled-components'
import { BsStarFill } from '@react-icons/all-files/bs/BsStarFill'
import { IoMdQuote } from '@react-icons/all-files/io/IoMdQuote'
import { InView } from 'react-intersection-observer'

const CardContainer = tw.div`flex justify-center gap-4 mt-14`
const ImageContainer = tw.div`rounded-full overflow-hidden w-14 h-14`
const Star = tw(BsStarFill)`w-4 h-4 text-yellow-500`

type ReviewType = {
  name: string
  timeAgo: string
  content: string
  imageUrl: string
  starsCount: number
}

const reviews: ReviewType[] = [
  {
    name: 'Fraz',
    timeAgo: '2 days ago',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur in neque quis dolores ab. Fugit dolore illo, ab pariatur blanditiis aspernatur sit perspiciatis quo impedit obcaecati, ratione animi error accusamus.',
    imageUrl: 'https://randomuser.me/api/portraits/men/12.jpg',
    starsCount: 4,
  },
  {
    name: 'Zaryab',
    timeAgo: '52 days ago',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur in neque quis dolores ab. Fugit dolore illo, ab pariatur blanditiis aspernatur sit perspiciatis quo impedit obcaecati, ratione animi error accusamus.',
    imageUrl: 'https://randomuser.me/api/portraits/men/17.jpg',
    starsCount: 5,
  },
  {
    name: 'Adeel',
    timeAgo: '7 days ago',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur in neque quis dolores ab. Fugit dolore illo, ab pariatur blanditiis aspernatur sit perspiciatis quo impedit obcaecati, ratione animi error accusamus.',
    imageUrl: 'https://randomuser.me/api/portraits/men/10.jpg',
    starsCount: 3,
  },
]

const Stars = ({ item }: { item: ReviewType }) => {
  const starsArray = new Array(item.starsCount).fill(0).map((_starItem, i) => i) // https://chat.openai.com/c/1ea66102-db48-4259-ab10-eea9fd394599

  return (
    <div className="flex items-center gap-x-1">
      {starsArray.map((i) => (
        <Star key={i} />
      ))}
    </div>
  )
}

const ReviewItem = ({ item }: { item: ReviewType }) => {
  const quotedContent = `"${item.content}"`
  return (
    <Card>
      <CardContent>
        <div className="flex items-start gap-x-4">
          <ImageContainer>
            <img src={item.imageUrl} alt={item.name} />
          </ImageContainer>
          <div>
            <div className="flex gap-x-3">
              <Text variant="bodyBig">{item.name}</Text>
              <Stars item={item} />
            </div>
            <Text color="gray-light" variant="subtitle">
              {item.timeAgo}
            </Text>
          </div>
        </div>
        <Text color="gray-light" className="mt-4 italic">
          {quotedContent}
        </Text>
        <div className="absolute right-4 top-4">
          <IoMdQuote className="fill-green-500" />
        </div>
      </CardContent>
    </Card>
  )
}

export const ReviewsSection = () => (
  <InView>
    {({ ref, inView }) => (
      <SectionAndOffset ref={ref}>
        <Text
          variant="h4"
          className={`text-center uppercase transition delay-150 duration-1000 ${
            inView ? '' : 'opacity-0'
          }`}
        >
          What Our Clients Say
        </Text>
        <CardContainer>
          {reviews.map((item, index) => (
            <div
              key={item.name}
              className={`transition duration-1000 ${
                inView ? '' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: 300 + 150 * index + 'ms' }}
            >
              <ReviewItem item={item} />
            </div>
          ))}
        </CardContainer>
      </SectionAndOffset>
    )}
  </InView>
)
