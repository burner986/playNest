import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class PxInput {
    @Field()
    readonly name: string;
    @Field(() => Int)
    readonly age: number;
}