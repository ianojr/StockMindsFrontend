import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inventory-form',
  standalone: false,
  templateUrl: './inventory-form.html',
  styleUrl: './inventory-form.css'
})
export class InventoryForm implements OnInit {
  @Input() product: any; // Optional if used in a dialog
  inventoryForm!: FormGroup;
  isEditMode = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Initialize form
    this.inventoryForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      quantity: [0, [Validators.required, Validators.min(0)]],
      price: [0, [Validators.required, Validators.min(0)]]
    });

    // If product data is passed via @Input (used as dialog/modal)
    if (this.product) {
      this.isEditMode = true;
      this.inventoryForm.patchValue(this.product);
    }

    // Or if editing by route param (optional setup)
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      // You can fetch the product by id here
      // this.loadProductById(id);
    }
  }

  onSubmit() {
    if (this.inventoryForm.invalid) return;

    const formValue = this.inventoryForm.value;

    if (this.isEditMode) {
      console.log('✅ Updating product:', formValue);
      // TODO: Call update logic (API or parent component)
    } else {
      console.log('✅ Adding product:', formValue);
      // TODO: Call add logic
    }

    this.router.navigate(['/dashboard/inventory']);
  }
}