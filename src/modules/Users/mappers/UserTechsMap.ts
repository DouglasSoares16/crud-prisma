import { IUserTechDTO } from "../dtos/IUserTechDTO";

class UserTechsMap {
  static toDTO(data: IUserTechDTO[]) {
    const techs = data.map((userTech) => {
      return userTech.tech;
    });

    return techs;
  }
}

export { UserTechsMap };