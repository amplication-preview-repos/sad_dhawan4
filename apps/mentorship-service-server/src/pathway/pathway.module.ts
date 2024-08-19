import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PathwayModuleBase } from "./base/pathway.module.base";
import { PathwayService } from "./pathway.service";
import { PathwayController } from "./pathway.controller";
import { PathwayResolver } from "./pathway.resolver";

@Module({
  imports: [PathwayModuleBase, forwardRef(() => AuthModule)],
  controllers: [PathwayController],
  providers: [PathwayService, PathwayResolver],
  exports: [PathwayService],
})
export class PathwayModule {}
