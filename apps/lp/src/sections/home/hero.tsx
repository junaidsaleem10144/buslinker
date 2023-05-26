import React from 'react'
import tw from 'tailwind-styled-components'
import { Section, Text, Button } from 'components'
import { HeroFeatures } from './hero-features'
import { BookingForm } from './booking-form'
import { InView } from 'react-intersection-observer'

const Container = tw.div`mt-16 flex justify-between items-center gap-x-8`
const Column = tw.div`w-1/2`

const MainImage = tw.img`rounded-3xl shadow-lg`
const Seperator = tw.div`w-10 h-1 bg-blue-500`
const Gradient = tw.div`absolute inset-0 bg-gradient-radial-hero`

export const LogoTitle = () => (
  <div>
    <div>
      <Text variant="h5">The private</Text>
      <Text variant="h3" className="mt-1">
        <span className="text-blue-500">Bus</span>
        <span className="ml-3 text-green-500">Company</span>
      </Text>
    </div>
    <Seperator className="mt-4" />
  </div>
)

const TextSection = () => (
  <div>
    <div className="space-y-6">
      <LogoTitle />
      <Text variant="bodyBig">
        This is a private bus company that takes you from point A to point B
        within Punjab
      </Text>
      <Button>Create Account</Button>
    </div>

    <div className="mt-32">
      <HeroFeatures />
    </div>
  </div>
)

const GradientBackground = () => (
  <div className="absolute left-0 right-0 top-0 h-[900px] z-0">
    <Gradient />
  </div>
)

const BookingFormWrapper = tw.div`transform transition duration-1000`

export const HeroSection = () => (
  <>
    <GradientBackground />
    <Section className="h-[900px]">
      <div className="flex justify-center mt-16">
        <InView>
          {({ inView, ref }) => (
            <BookingFormWrapper
              ref={ref}
              className={`${inView ? '' : 'translate-y-5 opacity-0'}`}
            >
              <BookingForm />
            </BookingFormWrapper>
          )}
        </InView>
      </div>
      <Container>
        <Column>
          <TextSection />
        </Column>
        <Column>
          <MainImage src="https://source.unsplash.com/T5jzpRTVF1U" alt="Bus" />
        </Column>
      </Container>
    </Section>
  </>
)
