# Generated by Django 4.1.5 on 2023-02-24 05:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jamrequestmodule', '0002_rename_userid_jamrequest_profileid_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='jamrequest',
            name='genre',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='jamrequest',
            name='instrument',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='profile',
            name='exp_level',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='profile',
            name='genres',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='profile',
            name='instruments',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='jamrequest',
            name='exp_level',
            field=models.TextField(null=True),
        ),
    ]
