package com.kanban.back.dto.reponseDTO.detailpageDTO;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
public class BoardUserDetailDTO {
    private UserTableDetailDTO userTable;
    private Integer board_user_id;
}
