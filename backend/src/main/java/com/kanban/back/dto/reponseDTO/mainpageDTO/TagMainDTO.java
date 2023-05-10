package com.kanban.back.dto.reponseDTO.mainpageDTO;


import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
public class TagMainDTO {
    private Integer tag_id;
    private String tag_name;
    private Integer tag_color;

}
