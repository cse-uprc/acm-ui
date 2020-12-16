import { CommonModule } from '@angular/common';
import { TestModuleMetadata } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AbstractTestBed, AcmkitLibModule } from 'acmkit/dist/acmkit-lib';

export class AppTestBed extends AbstractTestBed {
  static getModuleMetaData(): TestModuleMetadata {
    return {
      imports: [RouterTestingModule, CommonModule, AcmkitLibModule],
      declarations: [],
    };
  }
}
