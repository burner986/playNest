import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { PxService } from './px.service';
import { PxType } from './dto/pxtype.dto';
import { PxInput } from './inputs/px.input';


@Resolver()
export class PxResolver {
  constructor(private readonly pxService: PxService) {}

  @Query(() => String)
  async hello() {
    return 'hello';
  }

  @Query(() => [PxType])
  async px() {
    return this.pxService.findAll();
  }

  @Mutation(() => PxType)
  async createPx(@Args('input') input: PxInput) {
    return this.pxService.create(input);
  }
}