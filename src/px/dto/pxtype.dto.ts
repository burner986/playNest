import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class PxType {
    @Field(() => ID)
    id: string;
    @Field()
    readonly name: string;
    @Field(() => Int)
    readonly age: number;
}