"""empty message

Revision ID: 6b53aea02bac
Revises: ad2b3d149270
Create Date: 2022-10-28 00:42:03.566327

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6b53aea02bac'
down_revision = 'ad2b3d149270'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('productos',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('nombre', sa.String(length=250), nullable=False),
    sa.Column('descripcion', sa.String(length=250), nullable=False),
    sa.Column('precio', sa.Float(), nullable=False),
    sa.Column('cantidad', sa.Integer(), nullable=False),
    sa.Column('foto', sa.String(length=250), nullable=False),
    sa.Column('cocina_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['cocina_id'], ['usuarios.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('productos')
    # ### end Alembic commands ###
