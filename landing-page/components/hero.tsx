

import Container from "./container"
import { Heading } from "./heading"
import { LandingImages } from "./landingImages"
import { Subheading } from "./subheading"
import { Button } from "./ui/button"

const Hero = () => {
    return (
        <div>
            <Container className="pt-10 md:pt-20 lg:pt-32">
                <Heading as="h1">
                    Agents that do the work <br /> Approvals that keep you safe.
                </Heading>
                <Subheading className="py-8">Deploy AI agents that plan, act through your tools, and report <br /> outcomes—without changing how your teams work.</Subheading>
                <div className="flex items-center gap-6">
                    <Button className="shadow-brand">Start your free trial</Button>
                    <Button variant={"outline"}>View role based demos</Button>
                </div>
                <LandingImages></LandingImages>

            </Container>
        </div>
    )
}

export default Hero
