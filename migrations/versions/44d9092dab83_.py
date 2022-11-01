"""empty message

Revision ID: 44d9092dab83
Revises: 3ea15f5b66f3
Create Date: 2022-11-01 01:49:31.988137

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '44d9092dab83'
down_revision = '3ea15f5b66f3'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('productos', 'descripcion',
               existing_type=sa.VARCHAR(length=250),
               nullable=True)
    op.alter_column('productos', 'foto',
               existing_type=sa.VARCHAR(length=250),
               nullable=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('productos', 'foto',
               existing_type=sa.VARCHAR(length=250),
               nullable=False)
    op.alter_column('productos', 'descripcion',
               existing_type=sa.VARCHAR(length=250),
               nullable=False)
    # ### end Alembic commands ###