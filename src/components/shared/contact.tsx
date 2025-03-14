import { cn } from "@/lib/utils";
import React from "react";
import { Section } from "./section";
import { ContactBoxContainer } from "./contact-box-container";
import { Button, Input, Textarea } from "../ui";


interface Props {
    className?: string
}

export const Contact: React.FC<Props> = ({ className }) => {

    return (
       <Section bg={"gray"} id={"contact"} name={'Contact'}>
            <div className={cn('flex flex-wrap *:w-full sm:*:w-1/2', className)}>
                <ContactBoxContainer title={"Send me mail"}>
                    <div className={cn('flex flex-col', className)}>
                        <div className={cn('container flex flex-row flex-wrap ', className)}>
                            <Input className="w-full [@container(min-width:1rem)]:w-1/2" type="text" placeholder="First name" />
                            <Input className="w-full [@container(min-width:1rem)]:w-1/2" type="text" placeholder="Last name" />
                        </div>
                        <div>
                            <Input type="email" placeholder="Email" />
                            <Input type="tel" placeholder="Phone number" />
                        </div>
                        <Textarea name="Message" id="" placeholder="Message" ></Textarea>
                        <Button type="submit" className={cn('cursor-pointer', className)}>Submit</Button>
                    </div>
                </ContactBoxContainer>
                <div className={cn('flex flex-col', className)}>
                    <ContactBoxContainer title={"Send me mail"}>
                        <div>
                            gerger
                        </div>
                    </ContactBoxContainer>
                    <ContactBoxContainer title={"Send me mail"}>
                        <div>
                            ghe
                        </div>
                    </ContactBoxContainer>
                </div>
            </div>
       </Section>
    )
}
