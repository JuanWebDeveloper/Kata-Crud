package com.kata.api.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

import com.kata.api.models.TaskModel;
import com.kata.api.services.TaskService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT,
        RequestMethod.DELETE })

public class TaskController {
    @Autowired
    private TaskService taskService;

    @PostMapping("/createTask")
    public TaskModel createTask(@RequestBody TaskModel taskModel) {
        return taskService.createTask(taskModel);
    }

    @GetMapping("/getAllTask")
    public ArrayList<TaskModel> getAllTask() {
        return taskService.getAllTask();
    }

    @GetMapping("/getTaskById/{id}")
    public TaskModel getTaskById(@PathVariable long id) {
        return taskService.getTaskById(id);
    }

    @PutMapping("/updateTask")
    public TaskModel updateTask(@RequestBody TaskModel taskModel) {
        return taskService.updateTask(taskModel);
    }

    @DeleteMapping("/deleteTask/{id}")
    public boolean deleteTask(@PathVariable long id) {
        return taskService.deleteTask(id);
    }
}
