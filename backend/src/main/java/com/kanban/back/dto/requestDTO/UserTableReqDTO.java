package com.kanban.back.dto.requestDTO;

import com.kanban.back.entity.*;
import lombok.*;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
public class UserTableReqDTO {
    private String u_name;
    private String u_email;
    private String u_id;

    public UserTable toEntity(){
        return UserTable.builder()
                .u_name(u_name)
                .u_email(u_email)
                .u_id(u_id)
                .build();
    }
}
