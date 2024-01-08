import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {faRemove, faEdit, faE} from '@fortawesome/free-solid-svg-icons'
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categoryForm: FormGroup

  faRemove = faRemove;
  faEdit = faEdit;

  constructor(public categoryService: CategoryService) {
    this.categoryForm = new FormGroup({
      title: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
    this.categoryService.findAll();
  }

  onSubmit() {
    if(this.categoryForm.valid) {
      this.categoryService.create(this.categoryForm.value.title)
      this.categoryForm.reset();
      console.log(this.categoryForm.value)
    }
  }

  delete(id: number) {
    this.categoryService.delete(id);
  }
}
