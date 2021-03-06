// NOTE: The updater has been implemented without using this component, so it could be
// removed soon.

import { Component, OnInit } from '@angular/core';
import {NodeService} from '../../../../../services/node.service';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AppConfig } from 'src/app/app.config';

@Component({
  selector: 'app-update-node',
  templateUrl: './update-node.component.html',
  styleUrls: ['./update-node.component.css']
})
export class UpdateNodeComponent implements OnInit {
  updateError = false;
  isLoading = false;
  isUpdateAvailable = false;

  public static openDialog(dialog: MatDialog): MatDialogRef<UpdateNodeComponent, any> {
    const config = new MatDialogConfig();
    config.autoFocus = false;
    config.width = AppConfig.mediumModalWidth;

    return dialog.open(UpdateNodeComponent, config);
  }

  constructor(
    private nodeService: NodeService,
    private dialogRef: MatDialogRef<UpdateNodeComponent>,
  ) { }

  ngOnInit() {
    this.fetchUpdate();
  }

  private fetchUpdate() {
    this.isLoading = true;
    // this.nodeService.checkUpdate().subscribe(this.onFetchUpdateSuccess.bind(this), this.onFetchUpdateError.bind(this));
  }

  private onFetchUpdateSuccess(updateAvailable: boolean) {
    this.isLoading = false;
    this.isUpdateAvailable = updateAvailable;
  }

  private onFetchUpdateError(e) {
    this.isLoading = false;
    console.warn('check update problem', e);
  }

  onUpdateClicked() {
    this.isLoading = true;
    this.updateError = false;
    // this.nodeService.update().subscribe(this.onUpdateSuccess.bind(this), this.onUpdateError.bind(this));
  }

  onUpdateSuccess(updated: boolean) {
    this.isLoading = false;
    if (updated) {
      this.dialogRef.close(true);
    } else {
      this.onUpdateError();
    }
  }

  onUpdateError() {
    this.updateError = true;
    this.isLoading = false;
  }
}
