import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PathwayService } from "./pathway.service";
import { PathwayControllerBase } from "./base/pathway.controller.base";

@swagger.ApiTags("pathways")
@common.Controller("pathways")
export class PathwayController extends PathwayControllerBase {
  constructor(
    protected readonly service: PathwayService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
